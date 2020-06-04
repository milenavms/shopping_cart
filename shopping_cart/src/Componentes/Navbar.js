import React, { Component } from 'react';
import api from '../api/api.js';


export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      basket: []
    }

  }
  
  async componentDidMount() {
    const response = await api.get('/basket');
    this.setState({ basket: response.data });
  }



  render() {
    const { basket } = this.state;

    return (
      <div >
     

        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <h3  class="h6">Site de Compras</h3>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                
              </li>
            </ul>

            <form class="form-inline my-4 my-lg-0">
              <ul class="navbar-nav mr-auto">
                <li>
                  <div class="btn-group dropleft">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Meu Carrinho
                        </button>
                    
                    <div class="dropdown-menu" >
                      {basket.map(item =>
                      <a class="dropdown-item" href="#" key={item.id}>
                        <ul class="list-group list-group-horizontal">
                          <li class="list-group-item">{item.name}</li>
                          <li class="list-group-item">R$ {item.price}</li>
                        </ul>
                      </a>
                       )}
                       <a class="dropdown-item" href="#">
                        <ul class="list-group list-group-horizontal">
                          <li class="list-group-item">Total: R$ </li>
                        </ul>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>


        </nav>
      </div>
    )
  }
}