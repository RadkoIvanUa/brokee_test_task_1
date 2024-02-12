import { StyledContainer } from '../styled_component/StyledContainer';
import { StyledContent, StyledHero } from '../styled_component/StyledFeature';
import { CgChevronDoubleDown } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TESTS } from '../query/tests';
import { StyledTests } from '../styled_component/StyledTests';
import { MdBolt } from 'react-icons/md';
import adminPanel from '../img/admin_panel.png';

function Feature() {
  const [tests, setTests] = useState([]);

  const { data, loading, error } = useQuery(GET_ALL_TESTS);

  useEffect(() => {
    !loading && setTests(data.tests.filter(test => !test.requires_payment));
  }, [data]);

  return (
    <>
      <StyledHero>
        <div className={'heroContent'}>
          <h1 className={'title'}>Introducing Pricing</h1>
          <CgChevronDoubleDown size={80} color={'white'} />
        </div>
      </StyledHero>

      <StyledContainer>
        <StyledContent>
          <section>
            <p>
              We're starting 2024 off with a bang! We are happy to announce our biggest product
              update yet: the release of payment plans with a free trial.
            </p>
            <p>To make this a reality, we:</p>
            <ul className={'realityList'}>
              <li>Developed payment plans and integrated our platform with Stripe</li>
              <li>Opened sign-ups to the public</li>
              <li>Developed free tests specifically for the free trial</li>
              <li>Added team management</li>
              <li>
                Implemented a permissions system for various platform features based on payment
                plans
              </li>
            </ul>
            <p className={'letsStart'}>Let's start with the most exciting part - Free Tests!</p>
          </section>

          <section>
            <h2 className={'sectionTitle'}>Free Trial for (Easy) DevOps Tests</h2>
            <p>
              To showcase our platform without asking potential customers for credit card details,
              we designed several easy tests that can be taken free of charge. Simply{' '}
              <a href={'#'}>sign up on Brokee</a> with a company name, and get quick access to a
              feature-limited free trial that allows new users to conduct 5 easy tests and manage 1
              user, giving you a preview of our platform’s capabilities.
            </p>
            <StyledTests>
              <h3 className={'sectionSubtitle'}>Selection of our Free DevOps Tests</h3>
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

            <p>
              Once you get comfortable with the process, simply upgrade to any paid plan to send
              tests to more users and have access to more advanced tests. What do we mean by
              advanced DevOps tests? We have environments where candidates can work with live
              systems deployed to major cloud providers and showcase their skills in real-time.
              We've found that <a href="#">live DevOps tests</a> help avoid hiring risks more than
              relying on professional certifications or resumes.
            </p>
          </section>

          <section>
            <h2 className={'sectionTitle'}>Pricing Plans for DevOps Tests</h2>

            <div className={'priceItemWrapper'}>
              <div className={'priceItemTop'}>
                <MdBolt size={50} color={'#E1EAF4'} />

                <div className={'priceWrapper'}>
                  <span>$0</span>
                  <span>/test</span>
                </div>
                <span className={'priceItemSubtitle'}>Free</span>
                <p className={'priceItemDesc'}>
                  Explore Brokee commitment-free. No credit card required.
                </p>
              </div>

              <ul className={'priceFeaturesList'}>
                <li>Unlimited test invites</li>
                <li>Access to easy tests</li>
                <li>1 admin user</li>
                <li>5 easy tests attempts</li>
              </ul>

              <button className={'priceItemButton'}>Start free trial</button>
            </div>
            <div className={'priceItemWrapper'}>
              <div className={'priceItemTop'}>
                <MdBolt size={50} color={'#E1EAF4'} />

                <div className={'priceWrapper'}>
                  <span>$89</span>
                  <span>/test</span>
                </div>
                <span className={'priceItemSubtitle'}>On Demand</span>
                <p className={'priceItemDesc'}>
                  Our most flexible plan - pay only for the test runs you need.
                </p>
              </div>

              <ul className={'priceFeaturesList'}>
                <li>Unlimited test invites</li>
                <li>Access to easy tests</li>
                <li>Unlimited team members</li>
                <li>Savings Dashboard</li>
              </ul>

              <button className={'priceItemButton'}>By Test Credits</button>
            </div>
            <div className={'priceItemWrapper'}>
              <div className={'priceItemTop'}>
                <MdBolt size={50} color={'#FFAC33'} />

                <div className={'priceWrapper'}>
                  <span>$99</span>
                  <span>/month</span>
                </div>
                <span className={'priceItemSubtitle'}>Growth</span>
                <p className={'priceItemDesc'}>
                  The perfect choice if you need to assess skills every month.
                </p>
              </div>

              <ul className={'priceFeaturesList'}>
                <li>Unlimited test invites</li>
                <li>Access to easy tests</li>
                <li>Unlimited team members</li>
                <li>Savings Dashboard</li>
                <li>2 test runs / month included</li>
                <li>Unused test credits are accumulated</li>
                <li>Additional test runs start at $48/test</li>
                <li>API Access</li>
              </ul>

              <button className={['priceItemButton', 'lastPlan'].join(' ')}>Subscribe</button>
            </div>
          </section>

          <section>
            <h2 className={'sectionTitle'}>Flexible System: Credits Rollover Each Month</h2>
            <p>
              At the core of our payment system is the credit model. Users can choose between buying
              a certain amount of credits upfront or opting for a monthly subscription that comes
              with 2 credits each month. Test credits indicate how many hiring candidates can take
              skills assessments. Every time a candidate starts a test, 1 credit is deducted from
              the company's balance. Our Growth Plan has one amazing feature: credits accumulate
              month-to-month if not used. So, no need to stress about paying for a product and not
              using it. The hiring process can be sporadic, so you can use rollover credits from
              less active months to hire confidently, without seeing a spike in your billing.
            </p>
            <p>
              Read More: How Much Does Hiring DevOps Cost?: Hidden Costs of Your Hiring Pipeline
            </p>

            <p>
              This system offers unparalleled flexibility – if you're on a Growth Plan and go over
              your credit limit, candidates can still continue taking skills assessments - you will
              be charged for the extra usage at the end of the month based on a tiered pricing model
              (the more tests that are used in a month, the cheaper they get). Similarly, if you’re
              on an On-Demand Plan and run out of credits, you may simply buy more as needed.
            </p>
          </section>

          <section>
            <h2 className={'sectionTitle'}>Unlimited Candidate Test Invites</h2>

            <p>
              Send as many invites as you'd like to candidates. You'll only get charged if they take
              the test.
            </p>

            <p>
              We wanted to mirror the natural hiring process when designing our payment plans. We've
              seen that when you're hiring engineers for a specific role, you often invite many
              candidates for a technical interview, but only some of them will show up. With this
              idea in mind, Brokee allows you to invite an unlimited number of candidates to take a
              skills assessment, even though not all of them will actually take a test. This way, we
              charge customers based on the skills assessments that were started by candidates, not
              based on the number of invitations you send.
            </p>
          </section>

          <section>
            <h2 className={'sectionTitle'}>Add Multiple Admins for Team Management</h2>

            <p>
              When you're a small startup, one admin user might be enough for a testing platform.
              However, for tech recruiting firms or large hiring teams, you'll want to be able to
              provide access to multiple teammates. This is why we added basic team management to
              our paid plans to support bigger teams. Right now, the only role is an admin user, but
              in the future, we'll add more roles with different levels of access.
            </p>

            <img src={adminPanel} alt={'admin panel'} width={'350px'} />
          </section>

          <section>
            <h2 className={'sectionTitle'}>Ready to Try Our Free DevOps Testing?</h2>

            <p>
              We developed Brokee's payment plans with a deep understanding of the unique challenges
              faced by tech hiring teams. We invite you to <a href={'#'}>sign up</a> for our free
              trial and experience firsthand how our platform can revolutionize your tech hiring
              process.
            </p>
          </section>
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default Feature;
