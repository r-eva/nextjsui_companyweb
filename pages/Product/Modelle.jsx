import React, { Component } from 'react';
import { urlApi } from '../../Helpers/database';
import Axios from 'axios'
import Layout from '../../component/Layout/Layout'

class ThreedModelle extends Component {
    state = {
        data: [],
        getData: false
    }

    componentDidMount () {
        this.getDataProduct()
    }

    getDataProduct = () => {
        Axios.get(urlApi + '/produkte-and-services')
        .then(res => {
            this.setState({data: res.data, getData: true})
        })
        .catch(err => {
            console.log(err)
        })
    }

    renderData = () => {
        if (this.state.getData === false) {
           return <h1>::</h1>
        } else {
            var jsx = this.state.data.map(val => {
                return (
                    <div key={val.id}>
                        <h1>{val.Name}</h1>
                    </div>
                )
            })
            return jsx
        }
    }

    render() {
        console.log(this.state.data)
        return (
            <Layout>
            <div className="container-fluid">
                 {this.renderData()}
            </div>
            </Layout>
        );
    }
}

export default ThreedModelle;