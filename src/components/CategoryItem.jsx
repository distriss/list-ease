import React from 'react';
import { MDBListGroupItem, MDBIcon } from 'mdb-react-ui-kit';

export default function CategoryItem({ priority, id, title, toggleCategory, selectCategory, deleteCategory }) {
  return (
    <MDBListGroupItem
      noBorders
      className={`px-3 ${selectCategory ? 'active' : ''}`} // Apply 'active' class conditionally
      onClick={() => selectCategory(id)}
    >
      <span className="list-item-title">{title}</span>
      <div className="list-item-buttons">
        <button
          className={`button-togglepriority ${priority ? 'active' : ''}`} // Apply 'active' class conditionally
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
    </MDBListGroupItem>
  );
}
