import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange =(e) =>{
        setInputValue(e.target.value);
    }
    const handleSubmint = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length >2) {
            setCategories(cats =>[...cats,inputValue] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit= {handleSubmint}>
            <input 
            type="text"
            value={ inputValue }
            onChange = { (e) => handleInputChange(e) }
             />
        </form>
    )
    
}
   AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
   }
