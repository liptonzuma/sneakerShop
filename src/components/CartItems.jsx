import { Button } from '@material-ui/core';
import React from 'react'


import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


function CartItems({selectedItems,
                setSelectedItems,
                setItems,
                setNotification,
                setShow
}) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      selectedItems.length =0;
      setItems(selectedItems.length)
      console.log(selectedItems)
      setNotification(`Your items are being packaged for delivery, you will get a call once the
      the dispatch rider sets off. 
      Thank you for shopping with the most authentic sneaker shop.
      Come again next time.
      `)
      setShow(true)
      setOpen(false);
    };

    const removeItem=(e)=>{
        const itemImage=e.target.parentNode.parentNode.parentNode.children[0].src;
        const res=itemImage.split("/").slice(4,7).join("/");
        const index=selectedItems.findIndex(e=>(e.image===res));
        selectedItems.splice(index,1);
        setSelectedItems(selectedItems);
        setItems(selectedItems.length)
    }
    
    const prices = selectedItems.map(e=>e.price);
    const total = prices.length !== 0?prices.reduce((a,b)=> a+b) :0
 
    return (
        <div className="mt-2">
            {selectedItems.length === 0?
        <div className="container mt-5 p-5 text-center">
            <p className="mt-5 pt-5">No item selected</p>
        </div> :     
         <div className="container m-auto pt-5">
             <p className="text-center pt-3">
                 {selectedItems.length} item{selectedItems.length >1 && 's'} selected.
             </p>
            {selectedItems.map(el=>{
                return <div className="d-flex mt-5" key={Math.random()}>
                    <img src={el.image} alt="" className="img-fluid w-25 mx-4 gx-5 h-25" />
                    <p className="lead m-auto">${el.price}</p>
                    <div className="select m-auto">
                        <form  className="form-group">
                            <select name="" id="" className="form-control select text-center">
                                <option  disabled selected>size</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                            </select>
                        </form>
                    </div>
                    <div className="button m-auto">
                    <Button color="secondary" variant="contained" onClick={removeItem}>Remove</Button>
                    </div>
                </div>

               
            })}
        </div>   }
            {total !==0 && 
            <div className={`text-center m-3 ${classes.root}`}>
            <p className="text-center"> Total ~ ${total}</p>
                <Button variant="contained" color="primary" onClick={handleClick}>confirm purchase</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                    Items purchased successfully
                    </Alert>
                </Snackbar>
            </div>
            }
        </div>
    )
}

export default CartItems;
