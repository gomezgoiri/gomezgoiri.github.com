var subsection = (function () {

  function create_pager(divSelector, subsections, currentSubsectionNumber) {
    var html = '<nav>' +
                '<ul class="pager">';
    if (subsections.length>1 && currentSubsectionNumber>0) {
      var previousPage = subsections[currentSubsectionNumber-1];
      html += '<li class="previous"><a href="' + previousPage.url + '"><span aria-hidden="true">&larr;</span> ' + previousPage.title + '</a></li>';
    }
    if (currentSubsectionNumber+1<subsections.length) {
      var nextPage = subsections[currentSubsectionNumber+1];
      html += '<li class="next"><a href="' + nextPage.url + '">' + nextPage.title + ' <span aria-hidden="true">&rarr;</span></a></li>';
    }
    html += '</ul></nav>';
    divSelector.html($(html));
  }

  function fill_dropdown(divSelector, subsections) {
    for (var i=0; i<subsections.length; i++) {
      divSelector.append('<li><a href="' + subsections[i].url + '">' + subsections[i].title + '</a></li>');
    }
  }

  return {
      create_pager: create_pager,
      fill_dropdown: fill_dropdown,
  };
})();
