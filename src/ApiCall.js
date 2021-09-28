import React, {useEffect} from 'react';

function ApiCall(props){
	let finaldata = ""
	const url = "https://agile-refuge-42611.herokuapp.com/loginUser?userName=" + props.user + "&password=" + props.pass;
	useEffect(() => {
		(async() => {
			if (props.user.length === 0 || props.pass.length === 0) {
				return 0
			}
		await fetch(url)
			.then(response => response.json())
			.then( data => {
				console.log(data.role)
				finaldata = data.role
				props.updater(finaldata)
			})})()
	})

	return(
		""
	)
}

export default ApiCall;
