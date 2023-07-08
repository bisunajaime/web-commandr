import { SaveOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import React from 'react';

export const InputField = () => {
    return (
        <div
            style={{
                margin: '8px',
            }}
        >
            <Row>
                <Col flex="auto">
                    <Input placeholder="Enter code here" />
                </Col>
                <Col>
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<SaveOutlined />}
                    />
                </Col>
            </Row>
        </div>
    );
};
