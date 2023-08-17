// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import InitState from './InitState'

function PlacedOrder() {
    return (
        <div>
            <InitState/>
            <div> 
                <Grid columns={2} style={topBanner}>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <Link to='/'>
                                <Image src='/images/store-logo-2.png' style={logoStyle} />
                            </Link>
                        </Grid.Column>
                        <Grid.Column width={12} verticalAlign='middle' textAlign='center' style={headerStyle}>
                            <Header as='h1' textAlign='center'>Order Complete</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
}

export default PlacedOrder

const topBanner = {
    background: 'url(/images/header-bkg.png)',
    borderColor: '#DDD',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    height: '73px'
}

const logoStyle = {
    marginRight: '1.5em', 
    marginLeft: '4em', 
    marginTop: '5px'
}

const headerStyle = {
    marginTop: '5px'
}