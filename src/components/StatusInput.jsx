import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/Input';

function StatusInput({ addStatus }) {
    const [title, onTitleChange] = useInput('');
    const [category, onCategoryChange] = useInput('');
    const [body, onBodyChange] = useInput('');

    function handleAddStatus() {
        if (body.trim()) {
            addStatus({ title, category, body });
            onTitleChange({ target: { value: '' } }); 
            onCategoryChange({ target: { value: '' } });
            onBodyChange({ target: { value: '' } });
        }
    }

    return (
        <div className="status-input">
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={onTitleChange}
            />
            <input 
                type="text"
                placeholder="Category"
                value={category}
                onChange={onCategoryChange}
            />
            <textarea 
                type="text"
                placeholder="Curahkan statusmu..."
                value={body}
                onChange={onBodyChange}
            />
            <p className="status-left">
                <strong>{body.length}</strong>
                /350
            </p>
            <button type="button" onClick={handleAddStatus}>Kirim</button>
        </div>
    );
}

StatusInput.propTypes = {
    addStatus: PropTypes.func.isRequired,
};

export default StatusInput;