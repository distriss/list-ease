import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function CategoryItem({ priority, id, title, toggleCategory, selectCategory, deleteCategory }) {
  return (
    <li
      onClick={() => selectCategory(id)}
    >
      <span className="list-item-title">{title}</span>
      <div className="list-item-buttons">
        <Button
          className={`button-togglepriority ${priority ? '' : 'active'}`} 
          onClick={() => toggleCategory(id, !priority)}
        >
          {priority ? (
            <>
              <FontAwesomeIcon icon={faStar} color="yellow"/>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faStar} color="gray" />
            </>
          )}
        </Button>
        <Button
          variant="danger"
          className="button-delete-item"
          onClick={() => deleteCategory(id)}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}