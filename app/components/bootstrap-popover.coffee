BootstrapPopoverComponent = Ember.Component.extend
  tagName: "button"
  classNames: ["btn btn-xs"]
  attributeBindings: ["title", "dataTrigger:data-trigger", "dataHtml:data-html", "dataContent:data-content"]
  dataTrigger: "hover"
  dataHtml: "data-html"
  dataContent: "WTF"

  didInsertElement: ->
    console.log @templateForName("description/hcp")("")
    @$().popover()

`export default BootstrapPopoverComponent`
