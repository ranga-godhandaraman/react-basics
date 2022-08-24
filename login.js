import React,{useState} from 'react' 

const Login=()=>{ 
	const [email,setEmail]=useState(""); 
	const [password,setPassword]=useState(""); 
		const submitThis=()=>{
		
	}
	return(
	<div>
		<form action="" onSubmit={submitThis}> 
			<div class="mailformat"> 
				<label htmlFor="email">Email :</label>
				<div class="emlable">
					<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
				</div>
			</div> 
			<div class="passwordformat"> 
			<div class="pwlable">
				<label htmlFor="password">Password :</label>
			</div>	
			<input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
			</div>  
			<div class="submit">
			<button type="submit">Login</button>
			</div>
		</form>
	</div>
)}

export default Login