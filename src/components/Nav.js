import React from 'react'
import '../App.css';

const Nav = () => {
    return (
    <div className="App">
      <table>
        <head>
          <tr>
            <td>
              <img className="logo" alt="logo react" src="../../logo192.png"/>
            </td>
            <td className="mdb-title">
              Armazém do Cinema
            </td>
          </tr>
        </head>
      </table>
      <body>
        <header>
          <form id="form" className="mdb-search">
              <input
                type="text" 
                id="search"
                placeholder="O que está procurando?"
                className="input-search"
              />
          </form>
        </header>
      </body>
    </div>
    );
}

export default Nav;