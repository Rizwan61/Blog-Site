import React from 'react'
import { useEffect, useState } from 'react'


import { Button } from 'primereact/button'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import axios from 'axios'

import { FilterMatchMode, FilterOperator } from 'primereact/api';

function Homedash() {
  const [products, setProducts] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: { value: null, matchMode: FilterMatchMode.CONTAINS },
    price: { value: null, matchMode: FilterMatchMode.EQUALS },
    // 'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // representative: { value: null, matchMode: FilterMatchMode.IN },
    // status: { value: null, matchMode: FilterMatchMode.EQUALS },
    // verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});

const onGlobalFilterChange = (e) => {
  console.log("v", e.target.value);
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

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    })
  }, []);

  const handleEdit = (id) => {
    alert(id)
  }

  const imageBodyTemplate = (product) => {
    return <img src={product.image} alt={product.image} className=" h-4rem shadow-2 border-round" />;
  };

  const actionBodyTemplate = (product) => {
    return (<>
      <div className='flex gap-2'>
        <Button className='text-white py-0' size="small" onClick={() => handleEdit(product.id)} >Edit</Button>
        <Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" size="small" />
      </div>
    </>
    )
  };

  const header = renderHeader();
  return (
    
      <>
        
        <div>Dashboard</div>
        <div className="card mx-auto mt-3  bg-blue-100" style={{width:"950px"}}>
          <DataTable value={products} filters={filters} globalFilterFields={['title', 'price']} header={header} showGridlines={true} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem', backgroundColor: '#9ebdfc' }}>
            <Column field="id" header="ID" sortable ></Column>
            <Column field="image" header="Image" body={imageBodyTemplate}></Column>
            <Column field="title" filter  header="Name" sortable ></Column>
            <Column field="category" header="Category"></Column>
            <Column field="price" filter header="Price" sortable></Column>
            <Column field="action" header="Actions" body={actionBodyTemplate}></Column>
            <Column field="Content" header="Content" ></Column>
          </DataTable>
        </div>
      </>
    )
  
}

export default Homedash


