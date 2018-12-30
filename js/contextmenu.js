webix.ready(function(){
  webix.ui({
    view:"contextmenu",
    id:"my_menu",
    data:[
        "Add",
        "Rename",
        "Delete",
        { $template:"Separator" },
        "Info"
    ],
    master:"dirtree" //  ID of a DIV container
  });
})
