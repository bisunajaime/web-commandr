import { SaveOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import React, { useState } from 'react';

export const InputField = () => {
    const [code, setCode] = useState<string>();

    const handleOnChange = (result: any) => {
        const { value } = result.target;
        setCode(value);
    };

    return (
        <div
            style={{
                margin: '8px',
            }}
        >
            <Row>
                <Col flex="auto">
                    {code}
                    <Input
                        placeholder="Enter code here"
                        onChange={handleOnChange}
                    />
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
