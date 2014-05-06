BootstrapPopoverComponent = Ember.Component.extend
  tagName: "button"
  classNames: ["btn btn-xs"]
  attributeBindings: ["title"]

  didInsertElement: ->
    @$().popover(trigger: "hover", html: true, content: @$().html())
    @$().html("Info")

`export default BootstrapPopoverComponent`
