'use client';
import ModalForm from './components/ModalForm';
import ConfirmDeleteModal from './components/ConfirmDeleteModal';
import GridList from './components/GridList';
import React, { useState } from 'react';

export default function Page() {
  const initialFields = {
    naziv: '',
    telst: '',
    drzava: '',
    naslov: '',
    mesto: '',
    postnaSt: ''
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmDeleteModalOpen, setConfirmDeleteModalOpen] =
    useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [fields, setFields] = useState(initialFields);

  return (
    <>
      <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between mb-5">
        <h2 className="text-xl leading-6 font-medium text-gray-900">
          Restavracije
        </h2>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              setIsEditing(false);
              setFields(initialFields);
              setModalOpen(true);
            }}
          >
            Dodaj restavracijo
          </button>
        </div>
      </div>

      <GridList
        setFields={setFields}
        setModalOpen={setModalOpen}
        setIsEditing={setIsEditing}
        setConfirmDeleteModalOpen={setConfirmDeleteModalOpen}
      />
      {modalOpen && (
        <ModalForm
          setModalOpen={setModalOpen}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          setFields={setFields}
          fields={fields}
        />
      )}
      {confirmDeleteModalOpen && (
        <ConfirmDeleteModal
          setConfirmDeleteModalOpen={setConfirmDeleteModalOpen}
        />
      )}
    </>
  );
}
