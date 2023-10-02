import React from 'react';

export default function CategoryItem({ priority, id, title, toggleCategory, selectCategory, deleteCategory }) {
  return (
    <li
      onClick={() => selectCategory(id)}
    >
      <span className="list-item-title">{title}</span>
      <div className="list-item-buttons">
        <button
          className={`button-togglepriority ${priority ? 'active' : ''}`} 
          onClick={() => toggleCategory(id, !priority)}
        >
          {priority ? (
            <>
              <MDBIcon icon="star" />
              Unmark Priority
            </>
          ) : (
            <>
              <MDBIcon icon="star-o" />
              Mark Priority
            </>
          )}
        </button>
        <button
          className="button-delete-item"
          onClick={() => deleteCategory(id)}
        >
          <MDBIcon icon="trash" />
        </button>
      </div>
    </li>
  );
}