import React from 'react';
import Stories from './stories/Stories';
import { getNewStories } from '../services/story';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
      currentPage: 1
    };
  }

  async componentDidMount() {
    const stories = await getNewStories();
    this.setState({ stories });

    window.addEventListener('scroll', this.hasReachedBottom.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hasReachedBottom.bind(this));
  }

  hasReachedBottom() {
    return window.requestAnimationFrame(() => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.loadMoreStories();
      }
    });
  }

  loadMoreStories() {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  }

  render() {
    const items = this.state.stories.slice(
      0,
      this.props.initialStories * this.state.currentPage
    );
    return (
      <div>
        <h3 className="header-title">Hacker News Reader</h3>
        <Stories items={items} />
      </div>
    );
  }
}

export default App;
