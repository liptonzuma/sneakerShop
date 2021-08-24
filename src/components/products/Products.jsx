/* eslint-disable jsx-a11y/anchor-is-valid */
import Grid from '@material-ui/core/Grid'
import ProductItem from './ProductItem';


function Products({
    product,
    handleActiveClass
    ,setItems,items,
    setSelectedItems,
    selectedItems,
    getProductDetails
}) {
    const action=(e)=>{
        const child=e.target.parentNode.parentNode.parentNode.parentNode.children[0].textContent;
         setItems(items+=1);
         setSelectedItems(selectedItems.concat(product.find(e=>e.name === child)));
         return ;

    }
    return (
        <div className=" products container-lg mb-3">
            <h6 className="text-center heading pt-5 mt-5 text-uppercase">
                New Arrivals
            </h6>
            <div className="navigation d-flex">
            <nav className="nav nav-pills flex-row p-2 w-100">
            <a onClick={handleActiveClass} className=" btn flex-sm-fill text-sm-center nav-link active" aria-current="page">All</a>
            <a onClick={handleActiveClass} className=" btn flex-sm-fill text-sm-center nav-link">Nike</a>
            <a onClick={handleActiveClass} className=" btn flex-sm-fill text-sm-center nav-link">Fila</a>
            <a onClick={handleActiveClass} className=" btn flex-sm-fill text-sm-center nav-link" >Addidas</a>
            </nav>
            </div>
            <Grid container
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            >
                {
                    product.map(e=>{
                        return (
                         <ProductItem product ={e} key={e.id}
                         setItems={action} items={items} 
                         getProductDetails={getProductDetails}
                         />
                        )
                    })
                }
            </Grid>

        </div>
    )
}

export default Products
