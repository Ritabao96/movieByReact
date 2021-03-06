import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import Detail from '../containers/Detail'
import ShortComment from '../containers/ShortComment'
import LongComment from '../containers/LongComment'
import StarMsg from '../containers/StarMsg'
import SearchResult from '../containers/SearchResult'
import NotFound from '../containers/404'
import Login from '../containers/Login'
import User from '../containers/User'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/detail/:id/:title' component={Detail}/>
                    <Route path='/shortComment/:title/:id' component={ShortComment}/>
                    <Route path='/longComment/:title/:id' component={LongComment}/>
                    <Route path='/starMsg/:id' component={StarMsg} />
                    <Route path='/search/:val' component={SearchResult} />
                    <Route path='/Login(/:router)' component={Login}/>
                    <Route path='/User' component={User}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
