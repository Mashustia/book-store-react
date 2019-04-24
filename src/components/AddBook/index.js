import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Form, Input, TextArea } from 'semantic-ui-react';

class AddBook extends Component {
  state = {
    form: {
      title: '',
      cover: '',
      description: '',
      author: '',
      codeISBN: '',
      published: '',
      rating: '',
    },
    validation: {
      title: false,
      description: false,
      author: false,
      codeISBN: false,
      published: false,
    },
    formValid: false
  };

  handleChange = ({ target }) => {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [target.id]: target.value
      }
    });

    if (target.value !== '' && target.id !== 'cover' && target.id !== 'rating') {
      this.setState({validation: {...this.state.validation, [target.id]: true }})
    } else if (target.value === '' && target.id !== 'cover' && target.id !== 'rating') {
      this.setState({ validation: { ...this.state.validation, [target.id]: false }})
    }

    const fields = this.state.validation;
    let result = Object.keys(fields).filter(field => {
      return fields[field] === false;
    });

    result.length === 0 ? this.setState({formValid: true}) : this.setState({formValid: false});
  };

  render() {
    const { form } = this.state;
    return (
      <Container className="edit__book">
        <Form className="edit__form">
          <Form.Field className="form__field" id='title' control={Input} label='Название' placeholder='Гарри Поттер и философский камень' onChange={this.handleChange} value={form.title} required/>
          <Form.Field className="form__field" id='cover' control={Input} label='Обложка книги' onChange={this.handleChange} value={form.cover} />
          <Form.Field className="form__field" id='description' control={TextArea} label='Описание' placeholder='Книга, покорившая мир, эталон литературы для читателей всех возрастов, синоним успеха. Книга, сделавшая Дж.К.Роулинг самым читаемым писателем современности. Книга, ставшая культовой уже для нескольких поколений. ГАРРИ ПОТТЕР И ФИЛОСОФСКИЙ КАМЕНЬ - история начинается.' onChange={this.handleChange} value={form.description} required  />
          <Form.Field className="form__field" id='author' control={Input} label='Автор' placeholder='Джоан Кэтлин Роулинг' onChange={this.handleChange} value={form.author} required  />
          <Form.Group widths='equal'>
            <Form.Field className="form__field" id='codeISBN' control={Input} label='Код ISBN' placeholder='25201013' onChange={this.handleChange} value={form.codeISBN} required  />
            <Form.Field className="form__field" id='published' control={Input} label='Год издания' placeholder='2017' onChange={this.handleChange} value={form.published} required  />
            <Form.Field className="form__field" id='rating' control={Input} label='Рейтинг' placeholder='5' onChange={this.handleChange} value={form.rating} />
          </Form.Group>
          <Form.Button disabled={!this.state.formValid} >Сохранить изменения</Form.Button>
        </Form>
      </Container>
    );
  }
}

export default AddBook;
