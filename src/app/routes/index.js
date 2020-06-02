import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const Routes = () =>
  <Switch>
    <Route path={`/dashboard`}
      component={asyncComponent(() => import('./CardholderReview/CardholderReview'))} />
    {/* <Route path={`/saved-cards`}
      component={asyncComponent(() => import('./SavedCardsAndComparisonsPage'))} />
        <Route
      path={`/cardholder-reviews`}
      component={asyncComponent(() =>
        import('./CardholderReview/CardholderReview.js')
      )}
        />
         <Route
      path={`/saved-offers`}
      component={asyncComponent(() =>
        import('./SavedOffers')
      )}
        />
          <Route
      path={`/referral`}
      component={asyncComponent(() =>
        import('./Referrals')
      )}
        />
                <Route
          path={'/cardholder-create-review'}
          component={asyncComponent(() =>
         import('./CardholderReview/AddCardholderReview.js')
      )}
                />
                 <Route
      path={`/credit-card-discounts`}
      component={asyncComponent(() =>
        import('./CreditCardDiscounts')
      )}
                />
    <Route component={asyncComponent(() =>  import('./DashboardPage'))}/> */}

  </Switch>;


export default withRouter(Routes);

