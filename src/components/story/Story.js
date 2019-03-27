import React from 'react';
import { getStory } from '../../services/story';
import { distanceInWordsToNow } from 'date-fns';

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      story: null
    };
  }

  async componentDidMount() {
    const story = await getStory(this.props.id);
    this.setState({ story });
  }

  render() {
    const { story } = this.state;
    const item = story && (
      <li>
        <a
          href={story.url || `https://news.ycombinator.com/item?id=${story.id}`}
        >
          {story.title}
        </a>
        <div>
          by {story.by} {distanceInWordsToNow(new Date(story.time * 1000))} ago
        </div>
        <br />
      </li>
    );

    return story ? item : <React.Fragment />;
  }
}

export default Story;
