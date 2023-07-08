import { Avatar, List } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { PlayCircleTwoTone } from '@ant-design/icons';

export const CodeRecords = () => {
    const records = useSelector(
        (state: RootState) => state.codeRecords.codeRecords
    );

    return (
        <div style={{ height: 300, overflow: 'auto' }}>
            <List
                size="small"
                itemLayout="horizontal"
                dataSource={records}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <PlayCircleTwoTone
                                    style={{ fontSize: '24px' }}
                                />
                            }
                            title={item.label}
                            description={<code>{item.code}</code>}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};
