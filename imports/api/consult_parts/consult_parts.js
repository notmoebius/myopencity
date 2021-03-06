import {Mongo} from 'meteor/mongo'

export const ConsultParts = new Mongo.Collection('consultparts')

const VoteValuesSchema = new SimpleSchema({
  vote_value: {
    type: String
  },
  counter: {
    type: Number,
    defaultValue: 0
  }
})

const ConsultPartsSchema = new SimpleSchema({
    title: {
      type: String
    },
    consult: {
      type: String
    },
    consult_url_shorten: {
      type: String
    },
    author: {
      type: String
    },
    content: {
      type: String,
      defaultValue: ""
    },
    question: {
      type: String,
      optional: true
    },
    active: {
      type: Boolean,
      defaultValue: true
    },
    votes_activated: {
      type: Boolean,
      defaultValue: false
    },
    alternatives_activated: {
      type: Boolean,
      defaultValue: false
    },
    vote_label: { // ---------- Text of vote button
      type: String,
      defaultValue: "Voter"
    },
    created_at: {
      type: Date,
      defaultValue: new Date()
    },
    updated_at: {
      type: Date,
      optional: true
    },
    vote_values: {
      type: [VoteValuesSchema],
      defaultValue: []
    },
    results_format: {
      type: String,
      defaultValue: 'bar',
      allowedValues: ['bar', 'line', 'radar', 'pie', 'doughnut']
    },
    external_id: {
      type: String,
      optional: true
    },
    external_url: {
      type: String,
      optional: true
    }
})

ConsultParts.attachSchema(ConsultPartsSchema);
