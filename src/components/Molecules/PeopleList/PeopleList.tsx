import React from 'react';

interface Person {
  names: string;
  url: string;
}

interface PeopleListProps {
  people: any;
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  return <>{generateAnchorTags(people)}</>;
};

const generateAnchorTags = (people: Person[]): JSX.Element[] => {
  return people.map((person, index) => (
    <span key={person.names+index}>

      {people.length > 0 && index === people.length - 1 &&
        ' and '
      }
      <a className='text-blue-600' href={person.url} target="_blank" rel="noopener noreferrer">
      {person.names}
      </a>
      {people.length > 2 && index !== people.length - 1 &&
        ', '
      }
    </span>
  ));
};

export default PeopleList;