import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { changeProductCard, loadOneProduct } from './productSlice';
import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function OneProduct (): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const oneProduct = useSelector((state: RootState) => state.productState.oneProduct);
   




  useEffect(() => {
    dispatch(loadOneProduct(Number(id)));
  }, [dispatch, id]);

  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {setTitle(e.target.value)}
  
  const handleDescription: React.ChangeEventHandler<HTMLInputElement> = (e) => {setDescription(e.target.value)}

  const handlePrice: React.ChangeEventHandler<HTMLInputElement> = (e) => {setPrice(e.target.value)}

  const handleThumbnail: React.ChangeEventHandler<HTMLInputElement> = (e) => {setThumbnail(e.target.value)}


  const handleChangeProduct: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(
      changeProductCard({
        id: oneProduct.id,
        title: title.length > 0 ? title : oneProduct.title,
        description:
          description.length > 0 ? description : oneProduct.description,
        price: price.length > 0 ? price : oneProduct.price,
        thumbnail: thumbnail.length > 0 ? thumbnail : oneProduct.thumbnail,
      }),
    );
    nav('/')
    setTitle('');
    setDescription('');
    setPrice('');
    setThumbnail('');
  };

  return (
    <>
      <Container className='change_product'>
      <h3>Изменить карточку продукта</h3>
      <Form onSubmit={handleChangeProduct}>
          <Form.Control
            type="text"
            name="title"
            defaultValue={oneProduct.title}
            onChange={handleTitle}
            placeholder="Название"
          /> 

          <Form.Control
            type="text"
            name="description"
            as="textarea"
            rows={5}
            defaultValue={oneProduct.description}
            onChange={handleDescription}
            placeholder="Описание"
          /> 

          <Form.Control
            type="number"
            name="price"
            defaultValue={oneProduct.price}
            onChange={handlePrice}
            placeholder="Цена"
            
          /> 

          <Form.Control
            type="text"
            name="thumbnail"
            defaultValue={oneProduct.thumbnail}
            onChange={handleThumbnail}
            placeholder="Ссылка на изображене"

          /> 

        <Button variant="primary" type="submit">
          Сохранить
        </Button>
      <div>
       <Nav.Link href={`/`} className="button">
                    Отменить
       </Nav.Link>
       </div>
      </Form>
    </Container>


    </>
  );
}

export default OneProduct;