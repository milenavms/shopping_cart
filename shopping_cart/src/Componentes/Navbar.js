import React, { Component } from 'react'


export default class Navbar extends Component {
  render() {
    return (
      <div >
        <div class="navbar"></div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <a class="navbar-brand" href="#">Site de Compras</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
            </ul>

            <form class="form-inline my-4 my-lg-0">
              <ul class="navbar-nav mr-auto">
                <li>
                  <div class="btn-group dropleft">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Meu Carrinho
                        </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Item</a>
                      <a class="dropdown-item" href="#">Item 2</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Total: R$ 00</a>
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