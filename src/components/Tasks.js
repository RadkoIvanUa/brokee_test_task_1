import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TESTS } from '../query/tests';
import { StyledContainer } from '../styled_component/StyledContainer';
import { StyledTests } from '../styled_component/StyledTests';
import { GiReceiveMoney } from 'react-icons/gi';
import { PiFlowArrowLight } from 'react-icons/pi';
import { GrMoney } from 'react-icons/gr';
import { FaPeopleGroup } from 'react-icons/fa6';
import { MdPeople } from 'react-icons/md';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { StyledFeature } from '../styled_component/StyledFeature';
import useWindowDimensions from '../hooks/getWindowDimensions';

function Tests() {
  const [tests, setTests] = useState([]);
  const { height, width } = useWindowDimensions();

  const { data, loading, error } = useQuery(GET_ALL_TESTS);

  useEffect(() => {
    !loading && setTests(data.tests);
  }, [data]);

  return (
    <StyledContainer>
      <section>
        <h2 className={'sectionTitle'}>
          Introducing Pricing Plans and Free Trial for DevOps Tests
        </h2>

        <StyledFeature>
          <div className={'featureItem'}>
            <div className={'leftSide'}>
              <div className={'iconThumb'}>
                <GiReceiveMoney size={80} color={'rgb(69, 155, 122)'} />
              </div>
              <h3>Save your money and time</h3>
            </div>
            <PiFlowArrowLight
              size={(width < 768 && 45) || (width >= 768 && 100)}
              color={'rgb(69, 155, 122)'}
            />
            <p className={'featureText'}>
              <RiDoubleQuotesL
                size={20}
                color={'rgb(69, 155, 122)'}
                style={{ marginRight: '5px' }}
              />
              We designed several easy tests that can be taken free of charge.
              <RiDoubleQuotesR
                size={20}
                color={'rgb(69, 155, 122)'}
                style={{ marginLeft: '5px' }}
              />
            </p>
          </div>
          <div className={'featureItem'}>
            <p className={'featureText'}>
              <RiDoubleQuotesL
                size={20}
                color={'rgb(69, 155, 122)'}
                style={{ marginRight: '5px' }}
              />
              Credits accumulate month-to-month if not used.
              <RiDoubleQuotesR
                size={20}
                color={'rgb(69, 155, 122)'}
                style={{ marginLeft: '5px' }}
              />
            </p>
            <PiFlowArrowLight
              size={(width < 768 && 45) || (width >= 768 && 100)}
              color={'rgb(69, 155, 122)'}
              style={{ transform: 'rotate(180deg)' }}
            />
            <div className={'leftSide'}>
              <div className={'iconThumb'}>
                <GrMoney size={80} color={'rgb(69, 155, 122)'} />
              </div>
              <h3>Credits Rollover Each Month</h3>
            </div>
          </div>
          <div className={'featureItem'}>
            <div className={'leftSide'}>
              <div className={'iconThumb'}>
                <FaPeopleGroup size={100} color={'rgb(69, 155, 122)'} />
              </div>
              <h3>Unlimited Candidate Test Invites</h3>
            </div>
            <PiFlowArrowLight
              size={(width < 768 && 45) || (width >= 768 && 100)}
              color={'rgb(69, 155, 122)'}
            />
            <p className={'featureText'}>
              <RiDoubleQuotesL
                size={20}
                color={'rgb(69, 155, 122)'}
                style={{ marginRight: '5px' }}
              />
              We charge customers based on the skills assessments that were started by candidates.
              <RiDoubleQuotesR
                size={20}
                color={'rgb(69, 155, 122)'}
                style={{ marginLeft: '5px' }}
              />
            </p>
          </div>
          <div className={'featureItem'}>
            <p className={'featureText'}>
              <RiDoubleQuotesL
                size={20}
                color={'rgb(69, 155, 122)'}
                style={{ marginRight: '5px' }}
              />
              You to be able to provide access to multiple teammates.
              <RiDoubleQuotesR
                size={20}
                color={'rgb(69, 155, 122)'}
                style={{ marginLeft: '5px' }}
              />
            </p>
            <PiFlowArrowLight
              size={(width < 768 && 45) || (width >= 768 && 100)}
              color={'rgb(69, 155, 122)'}
              style={{ transform: 'rotate(180deg)' }}
            />
            <div className={'leftSide'}>
              <div className={'iconThumb'}>
                <MdPeople size={80} color={'rgb(69, 155, 122)'} />
              </div>
              <h3>Add Multiple Admins</h3>
            </div>
          </div>
        </StyledFeature>
      </section>

      <StyledTests>
        <h2 className={'sectionTitle'}>
          Check out our tests for popular cloud-native technologies
        </h2>
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
