PopoverView = Ember.View.extend
  tagName: "span"
  classNames: ["description"]

  didInsertElement: ->
    @$("button").popover()

`export default PopoverView`
