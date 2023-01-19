import ListItem from './ListItem';

const restaurants = [
  {
    naziv: 'Jack & Joe Stake',
    telst: '040402405',
    drzava: 'Slovenija',
    naslov: 'Naslov',
    mesto: 'Maribor',
    postnaSt: '2000'
  },

  {
    naziv: 'Ancora',
    telst: '040402405',
    drzava: 'Slovenija',
    naslov: 'Nekaj random',
    mesto: 'Maribor',
    postnaSt: '2000'
  }
];

export default function GridList({
  setFields,
  setIsEditing,
  setModalOpen,
  setConfirmDeleteModalOpen
}) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {restaurants.map(restaurant => (
        <ListItem
          restaurant={restaurant}
          setFields={setFields}
          setIsEditing={setIsEditing}
          setModalOpen={setModalOpen}
          setConfirmDeleteModalOpen={setConfirmDeleteModalOpen}
        />
      ))}
    </ul>
  );
}
