import { StyledContainer } from '../styled_component/StyledContainer';
import { StyledContent, StyledHero } from '../styled_component/StyledFeature';
import { CgChevronDoubleDown } from 'react-icons/cg';

function Feature() {
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
            <h2>Free Trial for (Easy) DevOps Tests</h2>
            <p>
              To showcase our platform without asking potential customers for credit card details,
              we designed several easy tests that can be taken free of charge. Simply{' '}
              <a href={'#'}>sign up on Brokee</a> with a company name, and get quick access to a
              feature-limited free trial that allows new users to conduct 5 easy tests and manage 1
              user, giving you a preview of our platform’s capabilities.
            </p>
          </section>
        </StyledContent>
      </StyledContainer>
    </>
  );
}

export default Feature;
