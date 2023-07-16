
export function StatisticsCard (props){
	return (
		<div className="relative
		flex flex-col p-4
		space-y-4 overflow-hidden
		bg-white
		items-center
		border border-border group">
			{props.img_svg? <props.img_svg heigth={90}/> : null}
			<p className="text-2xl">{props.qnty}</p>
			<p>{props.description}</p>
		</div>
	)
}