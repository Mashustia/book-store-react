import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import './style.css';

class EditBook extends Component {
  state = {
    form: {
      title: this.props.title,
      cover: this.props.cover,
      description: this.props.description,
      author: this.props.author,
      codeISBN: this.props.codeISBN,
      published: this.props.published,
      rating: this.props.rating,
    },
    disabled: true,
  };

  handleChange = ({ target }) => {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [target.id]: target.value
      }
    });
  };

  unlockForm = () => {
    this.setState({disabled: true})
  };

  render() {
    const { form } = this.state;
    return (
      <Container className="edit__book">
        <Button className="edit__button">Редактировать книгу</Button>
        <Form className="edit__form">
          <Form.Field disabled={this.state.disabled} className="form__field" id='title' control={Input} label='Название' onChange={this.handleChange} value={form.title} required/>
          <Form.Field disabled={this.state.disabled} className="form__field" id='cover' control={Input} label='Обложка книги' onChange={this.handleChange} value={form.cover} />
          <Form.Field disabled={this.state.disabled} className="form__field" id='description' control={TextArea} label='Описание' onChange={this.handleChange} value={form.description} required  />
          <Form.Field disabled={this.state.disabled} className="form__field" id='author' control={Input} label='Автор' onChange={this.handleChange} value={form.author} required  />
          <Form.Group widths='equal'>
            <Form.Field disabled={this.state.disabled} className="form__field" id='codeISBN' control={Input} label='Код ISBN' onChange={this.handleChange} value={form.codeISBN} required  />
            <Form.Field disabled={this.state.disabled} className="form__field" id='published' control={Input} label='Год издания' onChange={this.handleChange} value={form.published} required  />
            <Form.Field disabled={this.state.disabled} className="form__field" id='rating' control={Input} label='Рейтинг' onChange={this.handleChange} value={form.rating} />
          </Form.Group>
          <Form.Button disabled={this.state.disabled} onClick={this.unlockForm}>Сохранить изменения</Form.Button>
        </Form>
      </Container>
    );
  }
}

export default EditBook;
