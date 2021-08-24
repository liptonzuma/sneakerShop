/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Navbar({items,show}) {
    return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-light fixed-top">
        <div className="container-fluid ">
          <Link className="navbar-brand logo" to="/sneakerShop/">
            TheSneaker<span className="">Shop</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 center">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/sneakerShop/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sneakerShop/">Link</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sneakerShop/">Link 1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/sneakerShop/"  >Link 2</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-secondary" type="submit"> 
              <i className="fa fa-search"></i>
              </button>
            </form>
            <div className="status-bar">
           <Link to="/sneakerShop/notification" className="link"> <IconButton aria-label="bell">
              <StyledBadge badgeContent={show? 1 :0} color="secondary">
                <Icon className="fa fa-bell"  />
              </StyledBadge>
            </IconButton>
            </Link>
            <Link to="/sneakerShop/cart" className="link"> <IconButton aria-label="cart">
              <StyledBadge badgeContent={items >=0?items :0} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            </Link> 
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
