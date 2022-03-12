import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'


export default function VerticalBar(props) {

    const barRef = useRef(null)
    const w = 100;
    const h = 200;
    var v=h/2

    useEffect(() => {
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(props.data, d => d.intensity)])
            .range([h, 0]);
        let currentRef = d3.select(barRef.current)
            .append('svg')
            .attr('width', w)
            .attr('height', h)
            .style('padding', 10)
            .style('background-color', 'grey')
            .style("margin-left", 50)


        currentRef.selectAll('bar')
            .data(props.data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i+20)
            .attr("y", (d, i) => {
                v=h-10*d;
                return v
            })
            .attr("width", 40)
            .attr("height", (d, i) => d*10)
            .attr("fill", "red")
            




        const yAxis = d3.axisLeft()
            .ticks(5)
            .scale(yScale);

        currentRef.append('g')
            .classed('y axis', true)
            .attr('transform', 'translate(20,0)')
            .call(yAxis)
            
           

        currentRef.append("text")
            .attr("x","38")
            .attr("y", v)
            .text(props.data)
            .style("font","bold")
            

        currentRef.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0)
            .attr("x",0 - (h / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text(props.domain);

    }, [])
    return (
        <div className="parent">
            <div ref={barRef}>

            </div>
        </div>
    )
}