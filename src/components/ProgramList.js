import React , {useState} from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { Menu, MenuItem, MultiSelectField, MultiSelectOption, SingleSelectField, SingleSelectOption  } from '@dhis2/ui'

const query = {
    programs: {
        resource: 'programs',
        params: {
            fields: ['id', 'displayName'],
            paging: 'false',
        },
    },
}

const ProgramList = () => {
    const { error, loading, data } = useDataQuery(query)

    const [selected, setSelected] = useState([])
    if (error) {
        return <p>Error</p>
    }
    if (loading) {
        return <p>Loading</p>
    }
    return (

            <SingleSelectField
                dataTest="dhis2-uiwidgets-multiselectfield"
                filterable
                noMatchText="No match found"
                onChange={(payload) => setSelected(payload.selected)}
                selected={selected}
            >

                { 
                    data.programs.programs.map(({ id, displayName }) => (
                        <SingleSelectOption value={id} key={id} label={`Line List - ${displayName}`} dataTest="dhis2-uicore-multiselectoption" />
                    ))}
                
            </SingleSelectField>
       
    )
}

export default ProgramList 
