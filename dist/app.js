'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index'],
      window: {
        "navigationBarBackgroundColor": "#f2505d",
        "navigationBarTextStyle": "white",
        "enablePullDownRefresh": false
      },
      tabBar: {
        color: "#373737",
        selectedColor: "#ed145b",
        borderStyle: "#f0f0f0",
        backgroundColor: "#ffffff",
        list: [{
          pagePath: "pages/index",
          iconPath: "image/tabicon/tabicon-a1.png",
          selectedIconPath: "image/tabicon/tabicon-b1.png",
          text: "主页"
        }, {
          pagePath: "pages/classify",
          iconPath: "image/tabicon/tabicon-a2.png",
          selectedIconPath: "image/tabicon/tabicon-b2.png",
          text: "分类"
        }, {
          pagePath: "pages/cart",
          iconPath: "image/tabicon/tabicon-a3.png",
          selectedIconPath: "image/tabicon/tabicon-b3.png",
          text: "购物车"
        }, {
          pagePath: "pages/user",
          iconPath: "image/tabicon/tabicon-a4.png",
          selectedIconPath: "image/tabicon/tabicon-b4.png",
          text: "我的"
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFrREUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQS9DZkEsTUErQ2UsR0EvQ047QUFDUEMsYUFBTyxDQUNMLGFBREssQ0FEQTtBQUlQQyxjQUFRO0FBQ0osd0NBQWdDLFNBRDVCO0FBRUosa0NBQTBCLE9BRnRCO0FBR0osaUNBQXlCO0FBSHJCLE9BSkQ7QUFTUEMsY0FBUTtBQUNSQyxlQUFPLFNBREM7QUFFUkMsdUJBQWUsU0FGUDtBQUdSQyxxQkFBYSxTQUhMO0FBSVJDLHlCQUFpQixTQUpUO0FBS1JDLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSxhQURaO0FBRUVDLG9CQUFVLDhCQUZaO0FBR0VDLDRCQUFrQiw4QkFIcEI7QUFJRUMsZ0JBQU07QUFKUixTQURJLEVBT0o7QUFDRUgsb0JBQVUsZ0JBRFo7QUFFRUMsb0JBQVUsOEJBRlo7QUFHRUMsNEJBQWtCLDhCQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBUEksRUFhSjtBQUNFSCxvQkFBVSxZQURaO0FBRUVDLG9CQUFVLDhCQUZaO0FBR0VDLDRCQUFrQiw4QkFIcEI7QUFJRUMsZ0JBQU07QUFKUixTQWJJLEVBbUJKO0FBQ0VILG9CQUFVLFlBRFo7QUFFRUMsb0JBQVUsOEJBRlo7QUFHRUMsNEJBQWtCLDhCQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBbkJJO0FBTEU7QUFURCxLQStDTTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVVO0FBQ1QsV0FBS0MsU0FBTDtBQUNEOzs7MEJBRU1DLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLZCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS2MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkgsZUFBS2QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJnQixJQUFJaEIsUUFBL0I7QUFDQVksZ0JBQU1BLEdBQUdJLElBQUloQixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUFqRjBCLGVBQUtpQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaW5kZXgnXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgICAgXCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yXCI6IFwiI2YyNTA1ZFwiLFxyXG4gICAgICAgIFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOiBcIndoaXRlXCIsXHJcbiAgICAgICAgXCJlbmFibGVQdWxsRG93blJlZnJlc2hcIjogZmFsc2VcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgIGNvbG9yOiBcIiMzNzM3MzdcIixcclxuICAgIHNlbGVjdGVkQ29sb3I6IFwiI2VkMTQ1YlwiLFxyXG4gICAgYm9yZGVyU3R5bGU6IFwiI2YwZjBmMFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2luZGV4XCIsXHJcbiAgICAgICAgaWNvblBhdGg6IFwiaW1hZ2UvdGFiaWNvbi90YWJpY29uLWExLnBuZ1wiLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2UvdGFiaWNvbi90YWJpY29uLWIxLnBuZ1wiLFxyXG4gICAgICAgIHRleHQ6IFwi5Li76aG1XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2NsYXNzaWZ5XCIsXHJcbiAgICAgICAgaWNvblBhdGg6IFwiaW1hZ2UvdGFiaWNvbi90YWJpY29uLWEyLnBuZ1wiLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2UvdGFiaWNvbi90YWJpY29uLWIyLnBuZ1wiLFxyXG4gICAgICAgIHRleHQ6IFwi5YiG57G7XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2NhcnRcIixcclxuICAgICAgICBpY29uUGF0aDogXCJpbWFnZS90YWJpY29uL3RhYmljb24tYTMucG5nXCIsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpbWFnZS90YWJpY29uL3RhYmljb24tYjMucG5nXCIsXHJcbiAgICAgICAgdGV4dDogXCLotK3nianovaZcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvdXNlclwiLFxyXG4gICAgICAgIGljb25QYXRoOiBcImltYWdlL3RhYmljb24vdGFiaWNvbi1hNC5wbmdcIixcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcImltYWdlL3RhYmljb24vdGFiaWNvbi1iNC5wbmdcIixcclxuICAgICAgICB0ZXh0OiBcIuaIkeeahFwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgdGhpcy50ZXN0QXN5bmMoKVxyXG4gIH1cclxuXHJcbiAgc2xlZXAgKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19