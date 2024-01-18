import { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios'
import { FilterMatchMode, FilterOperator } from 'primereact/api';

import { InputText } from 'primereact/inputtext';

import './App.css'

import "primereact/resources/themes/lara-light-cyan/theme.css";


function App() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
       axios.get('https://fakestoreapi.com/products').then(
        (res)=>{
          setProducts(res.data)
          console.log(res)

        }
       )
    }, []);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      status: { value: null, matchMode: FilterMatchMode.EQUALS },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS }
  });
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
};

const renderHeader = () => {
  return (
      <div className="flex justify-content-end">
          <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
          </span>
      </div>
  );
};

    const imageBodyTemplate = (product) => {
      return <img src={product.image} alt={product.image} className="  shadow-2 border-round" style={{width:"100px"}} />;
  };
  const header = renderHeader();
  return (
    <>
      <div className="card mx-auto"  style={{width:"1000px"}}>
            <DataTable value={products}  paginator rows={5}  header={header} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="ID"></Column>
                <Column header="Image" body={imageBodyTemplate}></Column>
                <Column field="title" header="Name"></Column>
                <Column field="category" header="category"></Column>
                <Column field="price" header="Price"></Column>
            </DataTable>
        </div>
      
      
     
    </>
  )
}

export default App
