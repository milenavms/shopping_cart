import React, { Component } from 'react'
import api from '../api/api.js';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      quantity: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({ products: response.data });
  }

  handleChange(event) {
    this.setState({ quantity: event.target.value })
  }

  async handleClick(product, quantity) {
    product.quantity = quantity;
    var numero_aleatorio = Math.random();
    product.id = Math.floor(numero_aleatorio * 10);
    const response = await api.post('/basket', product)
    this.setState({ quantity: 0 })
  }

  render() {

    const { products, quantity } = this.state;

    return (
      <div>

        {/* INICIO: Body */}
        <div class="container">
          <div class="row primary" >
            <div class="col-sm">
            <hr class="my-4"/>
              <h3>Produtos</h3>
              <hr class="my-4"/>
            </div>
          </div>

          {/* INICIO: Cards de Produto */}
          <div class="row">
            {products.map(product =>
              <div class="col-sm-4" key={product.id}>
                <div class="card"  >
                  <div class="card"  >
                    <img src="https://bityli.com/0qkfG" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title"> {product.name} </h5>
                      <p class="card-text">{product.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Preço: R$ {product.price}</li>
                    </ul>
                    <div class="card-body">
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Comprar
                      </button>
                    </div>

                    {/* INICIO: Modal de add produto no carrinho  */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{product.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            {product.longDescription}
                          </div>
                          <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Preço: R$ {product.price}</h5>
                          </div>


                          <div class="form-group mx-sm-3 mb-2">
                            <div class="form-group mb-2">
                              <h6>Quantidade</h6>
                            </div>
                            <div class="form-group mx-sm-3 mb-2">
                              <label for="q" class="sr-only">Quantidade</label>
                              <input type="text" class="form-control" id="q" placeholder="Informe a Quantidade" value={quantity} onChange={this.handleChange} />
                            </div>
                            <button type="submit" class="btn btn-primary mb-2" onClick={() => this.handleClick(product, quantity)}>
                              
                              Adicionar ao Carrinho
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* FIM: Modal de add produto no carrinho  */}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* FIM: Cards de Produto */}
        </div>
      </div>
    )
  }
}