import React from 'react';
import NewPostPopup from './NewPost';
import ViewPostPopup from './ViewPost';

export default class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.viewerRef = React.createRef();
    this.backend = new props.backend();

    this.state = {
      isNewPostPopup: false,
      postData: {},
      isViewPostPopup: false,
      viewData: {}
    };
  }

  componentDidMount() {
    const { src } = this.props;
    const element = this.viewerRef.current;

    this.backend.init(src, element, this.openNewPostPopup.bind(this), this.openViewPostPopup.bind(this));
  }

  openNewPostPopup(data) {
  	this.setState({isNewPostPopup: true, postData: data});
  }

  closeNewPostPopup(comment) {
    this.setState({isNewPostPopup: false});
    if(comment !== undefined && comment !== '')
    {
      this.backend.newPost({
        description: comment,
        datetime: new Date().toLocaleString()
      }, this.state.postData);
    }
  }

  openViewPostPopup(data) {
  	this.setState({isViewPostPopup: true, viewData: data});
  }

  closeViewPostPopup() {
    this.setState({isViewPostPopup: false});
  }
  

  render() {
    return (
      <div ref={this.viewerRef} id='viewer' style={{ width: '100%', height: '100%' }}>
        <NewPostPopup 
          isModalOpen={this.state.isNewPostPopup}
          closeModalHandler={this.closeNewPostPopup.bind(this)}>
        </NewPostPopup>
        <ViewPostPopup 
          isModalOpen={this.state.isViewPostPopup}
          closeModalHandler={this.closeViewPostPopup.bind(this)}
          post={this.state.viewData}>
        </ViewPostPopup>
      </div>
    )
  }
}