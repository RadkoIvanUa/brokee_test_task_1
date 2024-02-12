import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TESTS } from '../query/tests';
import { StyledContainer } from '../styled_component/StyledContainer';
import { StyledTests } from '../styled_component/StyledTests';
import { Link } from 'react-router-dom';
import Feature from './Feature';

function Tests() {
  const [tests, setTests] = useState([]);

  const { data, loading, error } = useQuery(GET_ALL_TESTS);

  useEffect(() => {
    !loading && setTests(data.tests);
  }, [data]);

  return (
    <StyledContainer>
      <StyledTests>
        <Link to="/feature">Introducing Pricing Plans</Link>

        <h2>Check out our tests for popular cloud-native technologies</h2>
        <ul className="testList">
          {tests.map(test => (
            <li key={test.brokee_id} className="listItem">
              <div>
                <div className="imgThumb">
                  <img src={test.featured_image} alt={test.name} width="200px" />
                </div>
                <h3 className="itemTitle">{test.name}</h3>
                <span className="itemSubtitle">{test.category}</span>
                <p className="itemText">{test.description_short}</p>
              </div>
              <a
                href="#"
                className={
                  (test.status === 'ready' && 'itemButton') ||
                  (test.status === 'upcoming' && ['itemButton', 'disabledBtn'].join(' '))
                }
              >
                {(test.status === 'ready' && 'Start the test') ||
                  (test.status === 'upcoming' && 'Coming soon')}
              </a>
            </li>
          ))}
        </ul>
      </StyledTests>
    </StyledContainer>
  );
}

export default Tests;
