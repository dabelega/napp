webpackHotUpdate(0,{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(6), RootInstanceProvider = __webpack_require__(7), ReactMount = __webpack_require__(3), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(22);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(10);

var _newsActions = __webpack_require__(24);

var newsActions = _interopRequireWildcard(_newsActions);

var _newsStore = __webpack_require__(25);

var _newsStore2 = _interopRequireDefault(_newsStore);

var _Header = __webpack_require__(39);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(47);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Source = function (_React$Component) {
  _inherits(Source, _React$Component);

  function Source() {
    _classCallCheck(this, Source);

    var _this = _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).call(this));

    _this.state = {
      searchString: '',
      sources: []
    };
    _this.fetchNewsSources = _this.fetchNewsSources.bind(_this);
    return _this;
  }

  _createClass(Source, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      newsActions.getSources();
      _newsStore2.default.on('sources_change', this.fetchNewsSources);
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      _newsStore2.default.removeListener('sources_change', this.fetchNewsSources);
    }
  }, {
    key: 'fetchNewsSources',
    value: function fetchNewsSources() {
      this.setState({ sources: _newsStore2.default.fetchNewsSources() });
    }
  }, {
    key: 'fetchNewsArticles',
    value: function fetchNewsArticles() {
      this.setState({ sources: _newsStore2.default.fetchNewsArticles() });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ searchString: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var searchString = this.state.searchString.trim().toLowerCase();
      var sources = _lodash2.default.map(this.state.sources);

      if (searchString.length > 0) {
        sources = sources.filter(function (sourceName) {
          return sourceName.name.toLowerCase().match(searchString);
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'center' },
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'search-container' },
            _react2.default.createElement('input', {
              type: 'text', value: this.state.searchString,
              onChange: this.handleChange.bind(this), placeholder: 'Type here' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'source-list' },
            _react2.default.createElement(
              'ul',
              null,
              sources.map(function (sourceName, index) {
                return _react2.default.createElement(
                  'li',
                  { key: index },
                  sourceName.name,
                  sourceName.sortBysAvailable.map(function (sortOption) {
                    _react2.default.createElement(
                      'a',
                      { href: '/articles?sourceId=' + sourceName.id + '&sortOptions=' + sortOption },
                      console.log(sortOption),
                      ';',
                      _react2.default.createElement(
                        'span',
                        null,
                        sortOption
                      )
                    );
                  })
                );
              })
            )
          ),
          _react2.default.createElement(_Footer2.default, null)
        )
      );
    }
  }]);

  return Source;
}(_react2.default.Component);

exports.default = Source;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(8); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Source.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3VyY2UuanN4P2I5MzciXSwibmFtZXMiOlsibmV3c0FjdGlvbnMiLCJTb3VyY2UiLCJzdGF0ZSIsInNlYXJjaFN0cmluZyIsInNvdXJjZXMiLCJmZXRjaE5ld3NTb3VyY2VzIiwiYmluZCIsImdldFNvdXJjZXMiLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwic2V0U3RhdGUiLCJmZXRjaE5ld3NBcnRpY2xlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImxlbmd0aCIsImZpbHRlciIsInNvdXJjZU5hbWUiLCJuYW1lIiwibWF0Y2giLCJoYW5kbGVDaGFuZ2UiLCJpbmRleCIsInNvcnRCeXNBdmFpbGFibGUiLCJzb3J0T3B0aW9uIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLFc7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkMsTTs7O0FBQ25CLG9CQUFjO0FBQUE7O0FBQUE7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1JDLG9CQUFlLEVBRFA7QUFFUkMsZUFBUztBQUZELEtBQWI7QUFJQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFOZTtBQU9iOzs7O3lDQUVtQjtBQUNsQk4sa0JBQVlPLFVBQVo7QUFDQSwwQkFBVUMsRUFBVixDQUFhLGdCQUFiLEVBQThCLEtBQUtILGdCQUFuQztBQUNEOzs7MkNBRXFCO0FBQ3BCLDBCQUFVSSxjQUFWLENBQXlCLGdCQUF6QixFQUEwQyxLQUFLSixnQkFBL0M7QUFDRDs7O3VDQUVpQjtBQUNoQixXQUFLSyxRQUFMLENBQWMsRUFBRU4sU0FBUyxvQkFBVUMsZ0JBQVYsRUFBWCxFQUFkO0FBQ0Q7Ozt3Q0FFa0I7QUFDakIsV0FBS0ssUUFBTCxDQUFjLEVBQUVOLFNBQVMsb0JBQVVPLGlCQUFWLEVBQVgsRUFBZDtBQUNEOzs7aUNBRVlDLEMsRUFBRTtBQUNiLFdBQUtGLFFBQUwsQ0FBYyxFQUFDUCxjQUFhUyxFQUFFQyxNQUFGLENBQVNDLEtBQXZCLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBSVgsZUFBZSxLQUFLRCxLQUFMLENBQVdDLFlBQVgsQ0FBd0JZLElBQXhCLEdBQStCQyxXQUEvQixFQUFuQjtBQUNBLFVBQUlaLFVBQVUsaUJBQUVhLEdBQUYsQ0FBTSxLQUFLZixLQUFMLENBQVdFLE9BQWpCLENBQWQ7O0FBRUEsVUFBR0QsYUFBYWUsTUFBYixHQUFzQixDQUF6QixFQUEyQjtBQUN6QmQsa0JBQVVBLFFBQVFlLE1BQVIsQ0FBZSxVQUFTQyxVQUFULEVBQW9CO0FBQzNDLGlCQUFPQSxXQUFXQyxJQUFYLENBQWdCTCxXQUFoQixHQUE4Qk0sS0FBOUIsQ0FBcUNuQixZQUFyQyxDQUFQO0FBQ0QsU0FGUyxDQUFWO0FBR0Q7O0FBR0gsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRSwrREFERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUNFLG9CQUFLLE1BRFAsRUFDYyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsWUFEaEM7QUFFRSx3QkFBVSxLQUFLb0IsWUFBTCxDQUFrQmpCLElBQWxCLENBQXVCLElBQXZCLENBRlosRUFFMEMsYUFBWSxXQUZ0RDtBQURGLFdBRkY7QUFRRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUE7QUFDSUYsc0JBQVFhLEdBQVIsQ0FBWSxVQUFTRyxVQUFULEVBQW9CSSxLQUFwQixFQUEwQjtBQUN0Qyx1QkFDRTtBQUFBO0FBQUEsb0JBQUksS0FBS0EsS0FBVDtBQUNHSiw2QkFBV0MsSUFEZDtBQUVHRCw2QkFBV0ssZ0JBQVgsQ0FBNEJSLEdBQTVCLENBQWdDLFVBQUNTLFVBQUQsRUFBZ0I7QUFDaEQ7QUFBQTtBQUFBLHdCQUFHLDhCQUE0Qk4sV0FBV08sRUFBdkMscUJBQXlERCxVQUE1RDtBQUNDRSw4QkFBUUMsR0FBUixDQUFZSCxVQUFaLENBREQ7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUFPQTtBQUFQO0FBRkY7QUFLRCxtQkFOQztBQUZILGlCQURGO0FBYUMsZUFkRDtBQURKO0FBREYsV0FSRjtBQTZCRTtBQTdCRjtBQURGLE9BREY7QUFtQ0Q7Ozs7RUE3RW1DLGdCQUFNSSxTOztrQkFBckI3QixNIiwiZmlsZSI6IjAuZGJiN2IyNmI2ZTgzNzBhOWEzMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICcuLi8uLi9zYXNzL3N0eWxlcy5zY3NzJztcbmltcG9ydCAqIGFzIG5ld3NBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbmV3c0FjdGlvbnMnO1xuaW1wb3J0IG5ld3NTdG9yZSBmcm9tICcuLi9zdG9yZXMvbmV3c1N0b3JlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICgpe1xuXHRzdXBlcigpO1xuXHR0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoU3RyaW5nIDogJycsXG4gICAgICBzb3VyY2VzOiBbXVx0XHRcdFxuXHR9O1xuXHR0aGlzLmZldGNoTmV3c1NvdXJjZXMgPSB0aGlzLmZldGNoTmV3c1NvdXJjZXMuYmluZCh0aGlzKTtcdFx0XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICBuZXdzQWN0aW9ucy5nZXRTb3VyY2VzKCk7XG4gICAgbmV3c1N0b3JlLm9uKCdzb3VyY2VzX2NoYW5nZScsdGhpcy5mZXRjaE5ld3NTb3VyY2VzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbk1vdW50KCl7XG4gICAgbmV3c1N0b3JlLnJlbW92ZUxpc3RlbmVyKCdzb3VyY2VzX2NoYW5nZScsdGhpcy5mZXRjaE5ld3NTb3VyY2VzKTtcbiAgfVxuXG4gIGZldGNoTmV3c1NvdXJjZXMoKXtcbiAgICB0aGlzLnNldFN0YXRlKHsgc291cmNlczogbmV3c1N0b3JlLmZldGNoTmV3c1NvdXJjZXMoKSB9KTtcbiAgfVxuXG4gIGZldGNoTmV3c0FydGljbGVzKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNvdXJjZXM6IG5ld3NTdG9yZS5mZXRjaE5ld3NBcnRpY2xlcygpIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFN0cmluZzplLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWFyY2hTdHJpbmcgPSB0aGlzLnN0YXRlLnNlYXJjaFN0cmluZy50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgc291cmNlcyA9IF8ubWFwKHRoaXMuc3RhdGUuc291cmNlcyk7XG4gICAgXG4gICAgaWYoc2VhcmNoU3RyaW5nLmxlbmd0aCA+IDApe1xuICAgICAgc291cmNlcyA9IHNvdXJjZXMuZmlsdGVyKGZ1bmN0aW9uKHNvdXJjZU5hbWUpe1xuICAgICAgICByZXR1cm4gc291cmNlTmFtZS5uYW1lLnRvTG93ZXJDYXNlKCkubWF0Y2goIHNlYXJjaFN0cmluZyApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNvbnRhaW5lclwiID5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFN0cmluZ30gXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiAvPlxuICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291cmNlLWxpc3RcIj5cbiAgICAgICAgICA8dWw+IFxuICAgICAgICAgICAgeyBzb3VyY2VzLm1hcChmdW5jdGlvbihzb3VyY2VOYW1lLGluZGV4KXtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+IFxuICAgICAgICAgICAgICAgICAge3NvdXJjZU5hbWUubmFtZX0gXG4gICAgICAgICAgICAgICAgICB7c291cmNlTmFtZS5zb3J0QnlzQXZhaWxhYmxlLm1hcCgoc29ydE9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvYXJ0aWNsZXM/c291cmNlSWQ9JHtzb3VyY2VOYW1lLmlkfSZzb3J0T3B0aW9ucz0ke3NvcnRPcHRpb259YH0+XG4gICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHNvcnRPcHRpb24pfTtcbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzb3J0T3B0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICk7IFxuICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+ICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cdFxufVx0XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NvdXJjZS5qc3giXSwic291cmNlUm9vdCI6IiJ9