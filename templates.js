templates =
  {
     albumDivs: [
      '<div class = "albumDiv" id = <%= albumName%> rel = <%= albumName%> >'+
      '<p><%= albumName%></p>'+
      '</div>'
    ].join(""),

    albumButtons:[
      '<button type="button" class = "albums" rel=<%= albumName%>><%=albumName%></button>'
    ].join("  "),
    photoImages:[
      '<img src=<%= photo%> alt="" />'
    ].join("")
  };
