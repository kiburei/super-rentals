import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('rental.reviews', 'sortBy'),

  booking:Ember.inject.service(),

  actions: {
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    },
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    },
    addToBookings(item){
      this.get('booking').add(item);
    }
  }
});
