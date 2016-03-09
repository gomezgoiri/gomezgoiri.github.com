var subsection = (function () {

  function update(divSelector, subsections, currentSubsectionNumber) {
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

  return {
      update_pager: update
  };
})();
