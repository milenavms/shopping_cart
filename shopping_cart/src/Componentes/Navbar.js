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
     

        <nav class="navbar navbar-expand-lg   navbar-dark bg-dark">
          <h3  class="h6 text-white">Site de Compras</h3>
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
                      <div class="dropdown-item" href="#" key={item.id}>
                        <ul class="list-group list-group-horizontal">
                          <li class="list-group-item">{item.name}</li>
                          <li class="list-group-item">R$ {item.price}</li>
                          <li class="list-group-item"> <button type="button" class="btn ">
                          <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                              </svg>
                            </button></li>

                         
                        </ul>
                      </div>
                       )}
                       <div class="dropdown-item" href="#">
                        <ul class="list-group list-group-horizontal">
                          <li class="list-group-item">Total: R$ </li>
                        </ul>
                      </div>
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