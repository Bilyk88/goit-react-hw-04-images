import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from 'api';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
    selectedImage: null,
    isLoading: false,
    error: false,
    isModalOpen: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, value } = this.state;
    if (prevState.value !== value || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, error: false });
        const searchResult = await fetchImages({ page, value });
        this.setState(prevState => ({
          images: [...prevState.images, ...searchResult],
        }));
      } catch (error) {
        this.setState({ error: true });
        toast.error('Please, try again.');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = newValue => {
    this.setState({ value: newValue, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = image => {
    this.setState({
      isModalOpen: true,
      selectedImage: image,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { images, selectedImage, isLoading, isModalOpen } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.openModal} />
        )}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={selectedImage} alt="" />
          </Modal>
        )}
        <Toaster position="top-right" />
      </div>
    );
  }
}
