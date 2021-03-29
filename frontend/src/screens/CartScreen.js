import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
// import Message from '../components/Message'
// import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
      </Col>
    </Row>
  )
}

export default CartScreen
